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

"use client";

import { useAuthModal } from "@lightdotso/hooks";
import { Button, StateInfoSection } from "@lightdotso/ui";
import { UserIcon } from "lucide-react";
import { type FC } from "react";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

export const Login: FC = () => {
  // ---------------------------------------------------------------------------
  // Hooks
  // ---------------------------------------------------------------------------

  const { isAuthValid, isAuthLoading, handleAuthModal } = useAuthModal(false);

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <StateInfoSection
      icon={
        <UserIcon className="mx-auto size-8 rounded-full border border-border p-2 text-text md:size-10" />
      }
      title="Login"
      description="Get started first by logging in."
    >
      <Button
        className="w-full md:w-32"
        isLoading={isAuthLoading}
        disabled={isAuthLoading}
        onClick={handleAuthModal}
      >
        {isAuthValid ? "Login" : "Connect"}
      </Button>
    </StateInfoSection>
  );
};