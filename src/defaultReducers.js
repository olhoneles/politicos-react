/*
 * Copyright (c) 2017, Marcelo Jorge Vieira <metal@alucinados.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import city from "./select/cityDuck";
import education from "./select/educationDuck";
import elected from "./select/electedDuck";
import election from "./select/electionDuck";
import gender from "./select/genderDuck";
import maritalStatus from "./select/maritalStatusDuck";
import occupation from "./select/occupationDuck";
import politicians from "./select/politiciansDuck";
import politician from "./select/politicianDuck";
import politicalParty from "./select/politicalPartyDuck";
import politicalOffice from "./select/politicalOfficeDuck";
import state from "./select/stateDuck";

const defaultReducers = {
  city,
  education,
  elected,
  election,
  gender,
  maritalStatus,
  occupation,
  politicalOffice,
  politicalParty,
  politician,
  politicians,
  state
};

export default defaultReducers;
