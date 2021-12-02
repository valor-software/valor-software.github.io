
    import { async, TestBed } from '@angular/core/testing';
    import { ServicesPageModule } from './services-page.module';
    
    describe('ServicesPageModule', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ ServicesPageModule ]
        })
        .compileComponents();
      }));
    
      // TODO: Add real tests here.
      //
      // NB: This particular test does not do anything useful. 
      //     It does NOT check for correct instantiation of the module.
      it('should have a module definition', () => {
        expect(ServicesPageModule).toBeDefined();
      });
    });
          