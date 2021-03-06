/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import '../heading';
import '../label';
import { withTheme } from '../cn';

import './amount.css';

import Component from './amount';

/* eslint-disable import/export */
export * from './amount';

export default withTheme(Component);
