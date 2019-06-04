describe('API Command ',()=>{
    it('Open Page API', async ()=>{
        browser.url('https://forms.gle/nCMrxbi73Sk1waAb6');
         var data = await $$('.quantumWizTogglePaperradioOffRadio.exportOuterCircle');
         data[1].click();
        // data.click();
        await browser.pause(1000*2);

        // var submit = await $('.quantumWizButtonPaperbuttonLabel.exportLabel');
        // var tagName =  await submit.getTagName();        // var submit = await $('.freebirdFormviewerViewNavigationButtons')
        // submit.click();
        // submit.click();
        await browser.pause(1000*5);

    })

})