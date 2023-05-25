
    import { async, TestBed } from '@angular/core/testing';
    import { CoralPageModule } from './coral-page.module';
    
    describe('CoralPageModule', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ CoralPageModule ]
        })
        .compileComponents();
      }));
    
      // TODO: Add real tests here.
      //
      // NB: This particular test does not do anything useful. 
      //     It does NOT check for correct instantiation of the module.
      it('should have a module definition', () => {
        expect(CoralPageModule).toBeDefined();
      });
    });
          