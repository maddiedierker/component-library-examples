import React from "react";
import Button from "@madkas/cl-test-button";
import Text from "@madkas/cl-test-text";
import Card from "@madkas/cl-test-card";

const data = {
  headers: ["Component", "Version", "Dependencies", "Rendered"],
  columns: [
    {
      component: "Button",
      version: "1.0.0",
      dependencies: "Text@0.0.2",
      rendered: <Button text="hi" />,
    },
    {
      component: "Text",
      version: "1.0.0",
      dependencies: "",
      rendered: <Text>sup</Text>,
    },
    {
      component: "Card",
      version: "1.0.3",
      dependencies: "Button@^1.0.0, Text@0.0.1",
      rendered: <Card cardText="card text" buttonText="button text" />,
    },
  ],
};

export default function ComponentTable() {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          {data.headers.map((header) => (
            <th
              key={header.toLowerCase()}
              style={{ ...styles.header, ...styles.border }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.columns.map((column) => (
          <tr key={column.component.toLowerCase()} style={styles.border}>
            <td style={{ ...styles.border, ...styles.td }}>
              {column.component}
            </td>
            <td style={{ ...styles.border, ...styles.td }}>{column.version}</td>
            <td style={{ ...styles.border, ...styles.td }}>
              {column.dependencies}
            </td>
            <td style={{ ...styles.border, ...styles.td }}>
              {column.rendered}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  header: { textAlign: "left", width: "30%" },
  table: { borderCollapse: "collapse" },
  border: { border: "1px solid gray" },
  td: { padding: 5 },
};
