
    import { async, TestBed } from '@angular/core/testing';
    import { BreethePageModule } from './breethe-page.module';
    
    describe('BreethePageModule', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ BreethePageModule ]
        })
        .compileComponents();
      }));
    
      // TODO: Add real tests here.
      //
      // NB: This particular test does not do anything useful. 
      //     It does NOT check for correct instantiation of the module.
      it('should have a module definition', () => {
        expect(BreethePageModule).toBeDefined();
      });
    });
          