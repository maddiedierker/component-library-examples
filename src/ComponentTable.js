import React from "react";
import Button from "@madkas/cl-test-button";
import Text from "@madkas/cl-test-text";
import Card from "@madkas/cl-test-card";
import {
  Button as CoreButton,
  Card as CoreCard,
  Text as CoreText,
} from "@madkas/cl-test-core";
import ConflictingConsumerButton from "@madkas/cl-consumer";

function CoreComponents() {
  return (
    <div>
      <CoreButton text="core button" />
      <CoreText>
        <div>core text</div>
      </CoreText>
      <CoreCard cardText="core card" buttonText="core button" />
    </div>
  );
}

const data = {
  headers: ["Component", "Rendered"],
  columns: [
    {
      component: "Button",
      rendered: <Button text="button text" />,
    },
    {
      component: "Text",
      rendered: <Text>some text</Text>,
    },
    {
      component: "Card",
      rendered: <Card cardText="card text" buttonText="button text" />,
    },
    {
      component: "Core Components (all)",
      rendered: <CoreComponents />,
    },
    {
      component: "cl-consumer",
      rendered: <ConflictingConsumerButton />,
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
