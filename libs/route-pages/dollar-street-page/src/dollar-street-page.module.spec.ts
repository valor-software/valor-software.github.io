
    import { async, TestBed } from '@angular/core/testing';
    import { DollarStreetPageModule } from './dollar-street-page.module';
    
    describe('DollarStreetPageModule', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ DollarStreetPageModule ]
        })
        .compileComponents();
      }));
    
      // TODO: Add real tests here.
      //
      // NB: This particular test does not do anything useful. 
      //     It does NOT check for correct instantiation of the module.
      it('should have a module definition', () => {
        expect(DollarStreetPageModule).toBeDefined();
      });
    });
          