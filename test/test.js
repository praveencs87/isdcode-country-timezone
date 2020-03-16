'use strict';
const expect = require('chai').expect;
const index = require('../dist/index.js');

describe('Dialcode-Timezone function test', () => {
    
    it('should return India country timezone', () => {
        const timezone = index.getTimezone("+91");
        expect(timezone).to.equal('+5.5');
    });

   


});
