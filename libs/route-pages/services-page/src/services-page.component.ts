import { Component } from '@angular/core';
import { ContactModalComponent, ModalService } from "@valor-software/common-docs";
import SwiperCore, { Pagination, SwiperOptions  } from "swiper";
SwiperCore.use([Pagination]);

const PackageList = [
    {
        title: 'Startup Packages: From Idea to Scalable Production',
        description: 'Helping you fine-tune your idea! From just a couple of words to a fully-equipped rewarding product — we are here to cover your back in this thrilling journey.'
    },
    {
        title: 'Design Systems',
        description: 'Enhancing your design with a custom business-tailored design system that will include a UI kit, sketch sticker kit, and a specific framework, or agnostic component library.'
    },
    {
        title: 'Enterprise Scalable Architecture',
        description: 'Our comprehensive services allow for engineering and optimizing your enterprise architecture to help your organization realize operational efficiencies and gain a competitive advantage.'
    }
];

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'services-page',
    templateUrl: './services-page.component.html'
})
export class ServicesPageComponent {
    packageList = PackageList;
    swiperConfig: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        initialSlide: 0,
        pagination: {
            clickable: true
        }
    };

    constructor(
        private modalService: ModalService<ContactModalComponent>
    ) {}

    openModal() {
        this.modalService.open(ContactModalComponent);
    }
}