// Copyright (C) 2023 Light, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { Button, DialogDescription, DialogTitle } from "@lightdotso/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./modal";

// -----------------------------------------------------------------------------
// Meta
// -----------------------------------------------------------------------------

const meta: Meta<typeof Modal> = {
  title: "template/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

type Story = StoryObj<typeof Modal>;

// -----------------------------------------------------------------------------
// Story
// -----------------------------------------------------------------------------

export const Base: Story = {
  render: args => (
    <Modal
      size="sm"
      footerContent={
        <Button type="submit" size="sm" className="px-3">
          <span className="sr-only">Login</span>
          Login
        </Button>
      }
      open={true}
    >
      <DialogTitle>Login</DialogTitle>
      <DialogDescription>
        Login with your wallet to access your account.
      </DialogDescription>
    </Modal>
  ),
  args: {},
};