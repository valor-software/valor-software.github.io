
    import { async, TestBed } from '@angular/core/testing';
    import { PortfolioModule } from './portfolio.module';
    
    describe('PortfolioModule', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ PortfolioModule ]
        })
        .compileComponents();
      }));
    
      // TODO: Add real tests here.
      //
      // NB: This particular test does not do anything useful. 
      //     It does NOT check for correct instantiation of the module.
      it('should have a module definition', () => {
        expect(PortfolioModule).toBeDefined();
      });
    });
          