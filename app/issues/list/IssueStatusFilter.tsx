"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React from "react";

const statuses: {
  label: string;
  value?: Status;
}[] = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Open",
    value: "OPEN",
  },
  ,
  {
    label: "In Progress",
    value: "IN_PROGRESS",
  },
  {
    label: "Closed",
    value: "CLOSED",
  },
];

const IssueStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter By Status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item
            key={status.value || status.label}
            value={status.value || ""}
          >
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
