"use client";
import { Popover } from "@heroui/react/popover";

export default function Menu() {
  return (
    <Popover>
      <Popover.Trigger aria-label="Download options">
          <button>
            Trigger
          </button>  
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
