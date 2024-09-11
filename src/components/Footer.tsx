import { Text } from "@mantine/core";
import { footerProps } from "@lib/types";

export default function Footer(props: footerProps) {
  return (
    <Text c="dimmed" ta="center" mt="sm">
      <p>Copyright © {props.year} {props.fullName} {props.studentId}</p>
    </Text>
  );
}
