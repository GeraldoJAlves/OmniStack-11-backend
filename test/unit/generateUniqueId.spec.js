
const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate unique Id', () => {

    it('Should return string when call generateUniqueId', () => {

        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
})