import assert from 'assert/strict';
import {test} from 'uvu';

test('pass', () => assert.equal(1 + 1, 2));
test('fail', () => assert.equal(1 + 1, 3));

test.run();
