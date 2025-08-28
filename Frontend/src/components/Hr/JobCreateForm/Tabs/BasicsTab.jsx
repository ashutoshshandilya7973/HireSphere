import React from "react";
import {Card,CardHeader,CardTitle,CardContent,} from "../../../ui/card";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import {Select,SelectContent,SelectGroup,SelectTrigger,SelectValue,SelectItem,} from "../../../ui/select";
import { Briefcase } from "lucide-react";
import { Checkbox } from "../../../ui/checkbox";
import { Controller } from "react-hook-form";

const BasicsTab = ({ register, control }) => {
  const departments = ["Engineering", "Design", "Product", "Marketing", "Sales"];
  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
  const experienceLevels = [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Lead",
    "Executive",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2.5 items-center font-semibold text-xl">
          <Briefcase /> Job Basics
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          {/* Job Title + Department */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title*</Label>
              <Input
                type="text"
                {...register("title")}
                placeholder="Enter the job title..."
                id="title"
              />
            </div>

            <div className="space-y-2 ">
              <Label>Department*</Label>
              <Controller
                name="department"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value} >
                    <SelectTrigger>
                      <SelectValue placeholder="Select the department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {departments.map((dep) => (
                          <SelectItem key={dep} value={dep}>
                            {dep}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          {/* Location + Job Type + Experience */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location*</Label>
              <Input
                type="text"
                {...register("location")}
                placeholder="Enter the location..."
                id="location"
              />
            </div>

            <div className="space-y-2">
              <Label>Job Type*</Label>
              <Controller
                name="jobType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {jobTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label>Experience Level*</Label>
              <Controller
                name="experienceLevel"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {experienceLevels.map((exp) => (
                          <SelectItem key={exp} value={exp}>
                            {exp}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          {/* Salary Range */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="space-y-1">
              <p className="text-[14px] font-semibold">Salary Range</p>
              <Label htmlFor="minimum" className="text-gray-400">
                Minimum
              </Label>
              <Input {...register("minSalary")} placeholder="80000" id="minimum" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="maximum" className="text-gray-400">
                Maximum
              </Label>
              <Input {...register("maxSalary")} placeholder="800000" id="maximum" />
            </div>
            <div className="space-y-1">
              <Label>Currency</Label>
              <Controller
                name="currency"
                control={control}
                defaultValue="USD"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center gap-4">
            <Controller
              name="remoteWork"
              control={control}
              render={({ field }) => (
                <div className="flex gap-2.5">
                  <Checkbox
                    id="remote"
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                  />
                  <Label htmlFor="remote">Remote work available</Label>
                </div>
              )}
            />

            <Controller
              name="urgentHiring"
              control={control}
              render={({ field }) => (
                <div className="flex gap-2.5">
                  <Checkbox
                    id="urgent"
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                  />
                  <Label htmlFor="urgent">Urgent Hiring</Label>
                </div>
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicsTab;
