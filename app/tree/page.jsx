"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "../components/Container";
import "./styles.css";

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children?.length > 0;

  return (
    <div className="ml-4">
      <div
        className="flex cursor-pointer items-center gap-1 font-medium text-blue-600 hover:text-blue-800"
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {hasChildren && (
          <span className={`arrow ${expanded ? "rotate" : ""}`}>▶</span>
        )}
        {node.url ? (
          <Link href={node.url} className="hover:underline">
            {node.label}
          </Link>
        ) : (
          node.label
        )}
      </div>

      <div className={`children-container ${expanded ? "expanded" : ""} ml-4`}>
        {hasChildren &&
          node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
      </div>
    </div>
  );
};

const Tree = ({ data }) => {
  return (
    <div className="w-fit rounded-lg border border-gray-300 p-4 shadow-md">
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

const MUI_X_PRODUCTS = [
  {
    id: 1,
    label: "CEO",
    url: "/ceo",
    children: [
      {
        id: 2,
        label: "Manager 1",
        url: "/manager1",
        children: [
          {
            id: 3,
            label: "Team Lead A",
            url: "/leadA",
            children: [
              { id: 4, label: "Employee A1", url: "/employee-a1" },
              { id: 5, label: "Employee A2", url: "/employee-a2" },
            ],
          },
          {
            id: 6,
            label: "Team Lead B",
            children: [{ id: 7, label: "Employee B1", url: "/employee-b1" }],
          },
        ],
      },
      {
        id: 8,
        label: "Manager 2",
        url: "/manager2",
        children: [
          {
            id: 9,
            label: "Team Lead C",
            children: [
              { id: 10, label: "Employee C1", url: "/employee-c1" },
              { id: 11, label: "Employee C2", url: "/employee-c2" },
            ],
          },
        ],
      },
    ],
  },
];

const page = () => {
  return (
    <Container>
      <Tree data={MUI_X_PRODUCTS} />
    </Container>
  );
};

export default page;
