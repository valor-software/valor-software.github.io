
    import { async, TestBed } from '@angular/core/testing';
    import { TablesReadyPageModule } from './tablesready-page.module';
    
    describe('TablesReadyPageModule', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ TablesReadyPageModule ]
        })
        .compileComponents();
      }));
    
      // TODO: Add real tests here.
      //
      // NB: This particular test does not do anything useful. 
      //     It does NOT check for correct instantiation of the module.
      it('should have a module definition', () => {
        expect(TablesReadyPageModule).toBeDefined();
      });
    });
          