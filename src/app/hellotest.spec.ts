describe('Test Hello Test' , () => {
  let expected;
  let notExpected;
  beforeEach(()=> {
    expected='hellotest';
    notExpected='hellotest11';
  });
  afterEach(()=> {
    expected='';

    notExpected='';
  })
  it('Test hello test to be hellotest',()=> {
     expect('hellotest').toBe(expected);
   })
   it('Test hello test is not to be hellotest',()=> {
    expect('hellotest').not.toBe(notExpected);
  })
});



