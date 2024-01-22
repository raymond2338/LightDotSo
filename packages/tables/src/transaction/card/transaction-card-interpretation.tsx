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

import type { TransactionData } from "@lightdotso/data";
import type { FC } from "react";

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type TransactionCardInterpretationProps = { transaction: TransactionData };

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

export const TransactionCardInterpretation: FC<
  TransactionCardInterpretationProps
> = ({ transaction: { interpretation } }) => {
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <div className="flex items-center space-x-1.5">
      {interpretation?.actions &&
        interpretation.actions.map((action, index) => (
          <div key={index} className="flex items-center space-x-1.5">
            <span className="text-xs font-medium text-gray-400">
              {action.id}
            </span>
          </div>
        ))}
    </div>
  );
};