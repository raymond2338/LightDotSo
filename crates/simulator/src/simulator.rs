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

use crate::simulator_api::SimulatorServer;
use async_trait::async_trait;
use jsonrpsee::core::RpcResult;

pub struct SimulatorServerImpl {}

#[async_trait]
impl SimulatorServer for SimulatorServerImpl {
    async fn simulate_execution(&self) -> RpcResult<String> {
        return Ok(format!("simulator/{}", env!("CARGO_PKG_VERSION")));
    }
    async fn simulate_execution_bundle(&self) -> RpcResult<String> {
        return Ok(format!("simulator/{}", env!("CARGO_PKG_VERSION")));
    }
    async fn simulate_asset_changes(&self) -> RpcResult<String> {
        return Ok(format!("simulator/{}", env!("CARGO_PKG_VERSION")));
    }
    async fn simulate_asset_changes_bundle(&self) -> RpcResult<String> {
        return Ok(format!("simulator/{}", env!("CARGO_PKG_VERSION")));
    }
    async fn simulate_user_operation(&self) -> RpcResult<String> {
        return Ok(format!("simulator/{}", env!("CARGO_PKG_VERSION")));
    }
    async fn simulate_user_operation_bundle(&self) -> RpcResult<String> {
        return Ok(format!("simulator/{}", env!("CARGO_PKG_VERSION")));
    }
    async fn simulate_user_operation_asset_changes(&self) -> RpcResult<String> {
        return Ok(format!("simulator/{}", env!("CARGO_PKG_VERSION")));
    }
    async fn simulate_user_operation_asset_changes_bundle(&self) -> RpcResult<String> {
        return Ok(format!("simulator/{}", env!("CARGO_PKG_VERSION")));
    }
}