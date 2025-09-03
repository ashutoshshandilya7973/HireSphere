import React from "react";
import { Card, CardHeader, CardTitle, CardContent, } from "../../../ui/card";
import { Briefcase } from "lucide-react";
import useFormContext from "../../../../features/form/hooks/useFormContext";
import TextField from "../../../../features/form/components/controller/TextField";
import Menu from "../../../../features/form/components/controller/Menu";
import CheckboxComp from "../../../../features/form/components/controller/CheckBox";

const BasicsTab = () => {
  const departments = ["Engineering", "Design", "Product", "Marketing", "Sales"];
  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
  const experienceLevels = [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Lead",
    "Executive",
  ];
  const currency = ["USD", "EUR", "GBP"]
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2.5 items-center font-semibold text-xl">
          <Briefcase /> Job Basics
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField type="text" name="title" placeholder="Enter the job title..." label="Job Title" />
            <Menu name="department" label="Department*" placeholder="Select the department" group={departments} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TextField name="location" label="Location" placeholder="Enter the location" type="text" />
            <Menu name="jobType" label="Job Type" placeholder="Select Type" group={jobTypes} />
            <Menu name="experienceLevel" label="Experience Level*" placeholder="Select level" group={experienceLevels} />
            <TextField name="minSalary" type="number" label="Salary Range (min)" placeholder="8000" />

            <TextField name="maxSalary" type="number" label="Salary Range (max)" placeholder="800000" />
            <Menu name="currency" label="Currency" group={currency} />
          </div>

          
          <div className="flex items-center gap-4">
            <CheckboxComp name="remoteWork" label="Remote work available" />
            <CheckboxComp name="urgentHiring" label="Urgent Hiring" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicsTab;
