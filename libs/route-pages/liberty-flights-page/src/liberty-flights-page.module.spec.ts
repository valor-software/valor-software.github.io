
    import { async, TestBed } from '@angular/core/testing';
    import { LibertyFlightsPageModule } from './liberty-flights-page.module';
    
    describe('LibertyFlightsPageModule', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ LibertyFlightsPageModule ]
        })
        .compileComponents();
      }));
    
      // TODO: Add real tests here.
      //
      // NB: This particular test does not do anything useful. 
      //     It does NOT check for correct instantiation of the module.
      it('should have a module definition', () => {
        expect(LibertyFlightsPageModule).toBeDefined();
      });
    });
          