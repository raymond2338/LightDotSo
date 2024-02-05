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

import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./banner";

// -----------------------------------------------------------------------------
// Meta
// -----------------------------------------------------------------------------

const meta: Meta<typeof Banner> = {
  title: "template/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

type Story = StoryObj<typeof Banner>;

// -----------------------------------------------------------------------------
// Story
// -----------------------------------------------------------------------------

export const Beta: Story = {
  render: args => <Banner kind="beta" />,
  args: {},
};
export const Demo: Story = {
  render: args => <Banner kind="demo" />,
  args: {},
};
export const Outage: Story = {
  render: args => <Banner kind="outage" />,
  args: {},
};