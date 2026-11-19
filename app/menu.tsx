"use client";
import { Button } from "@heroui/react/button";
import { Popover } from "@heroui/react/popover";
import { Tooltip } from "@heroui/react/tooltip";

export default function Menu() {
  return (
    <Popover>
      <Popover.Trigger aria-label="Download options">
        <Tooltip delay={0}>
          <Button variant="ghost" isIconOnly>
            Trigger
          </Button>
          <Tooltip.Content showArrow>
            <Tooltip.Arrow />
            <p>Download</p>
          </Tooltip.Content>
        </Tooltip>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Dialog>
          <Popover.Heading>Heading</Popover.Heading>
          Body
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
