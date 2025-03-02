"use client"

import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const SelectOptions = () => {
  return (
    <div className="px-10 md:px-20 lg:px-44">
        <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium" htmlFor="">Difficulty Level</label>
                <Select>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advance">Advance</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium" htmlFor="">Course Duration</label>
                <Select>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2 Hours">2 Hours</SelectItem>
                        <SelectItem value="3 Hours">3 Hours</SelectItem>
                        <SelectItem value="more than 3 Hours">more than 3 Hours</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium" htmlFor="">Add Videos</label>
                <Select>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium" htmlFor="">No of chapters</label>
                <Input type="number"></Input>
              </div>

        </div>
    </div>
  )
}

export default SelectOptions