"use client";

import { Button, Dropdown, Label } from "@heroui/react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button
          variant="ghost"
          isIconOnly
          aria-label="Toggle menu"
          onPress={() => setIsOpen(!isOpen)}
        >
          Menu
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu aria-label="Site menu">
            <Dropdown.Item key="home" href="/">
              <Label>Home</Label>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </header>
  );
}
