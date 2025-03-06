import React from 'react'
import YouTube from 'react-youtube';
import ReactMarkdown from "react-markdown"

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

const ChapterContent = ({chapter, content}) => {
    // console.log(chapter);
    // console.log(content);

  


  return (
    <div className='p-10'>
        <h2 className='font-medium text-2xl '>{chapter?.ChapterName}</h2>
        <p className='text-gray-500'>{chapter?.About}</p>


        {/* video */}
          <div className='flex justify-center my-6'>
            <YouTube
             videoId={content?.videoId}
             opts={opts}
             />
          </div>


        {/* content */}

        <div>
            {
                content?.content?.map((item,index)=>(
                    <div className='p-5 bg-slate-100 mb-3 rounded-lg' key={index}>
                        <h2 className='font-medium text-lg '>{item.title}</h2>
                        {/* <p className='whitespace-pre-wrap'>{item.description}</p> */}

                        <ReactMarkdown>{item.description}</ReactMarkdown>
                        {
                            item.code_example && <div className='p-4 bg-black text-white rounded mt-2'>
                            <pre>
                                <code>
                                    {item.code_example}
                                </code>
                            </pre>
                        </div>
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ChapterContent