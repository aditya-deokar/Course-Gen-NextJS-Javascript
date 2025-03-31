import { GenerateChapterContent_AI } from "@/configs/AIModel";
import { inngest } from "./client";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/schema"
import service from "@/configs/service";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);


export const GenerateChapters = inngest.createFunction(
  { id: "gen-course" },
  { event: "notes.gen" },
  async ({ event, step }) => {
     const { course }= event.data;

     const notesResult= await step.run('Generate Chapter Notes', async()=>{
        const chapters = course?.courseOutput?.Chapters;

        let index=0;

        chapters.forEach(async(chapter)=>{
            const PROMPT = `Explain the concept in detail on Topic: ${course?.name}, specific in Chapter:${chapter?.ChapterName} cover all the chapter points like ${chapter?.About} and add more, in JSON Format with list of array with field as title, description in detail, code example (Code field in <precode> format) if applicable and ensure the reading material must be in ${chapter?.Duration}`;


             let videoId='';

              // video content
              service.getVideo(course?.name+':'+chapter?.ChapterName).then(resp=>{
                console.log(resp);
                videoId=resp[0]?.id?.videoId
              })

              
            // console.log("Prompt:", PROMPT);
            const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
            const content = JSON.parse(result?.response?.text());

            
        // Save to database
        await db.insert(Chapters).values({
            chapterId: index,
            courseId: course?.courseId,
            content:content,
            videoId,
          });

          index=index+1;
  
          console.log(`Chapter ${index} saved successfully.`);
        })

     })
  },
);


