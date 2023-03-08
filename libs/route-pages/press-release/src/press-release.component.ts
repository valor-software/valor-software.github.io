import { Component } from "@angular/core";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "press-release",
  templateUrl: "./press-release.component.html",
})
export class PressReleaseComponent {
  public readonly additionalLinks = [
    { src: "assets/press-releases/icons/discord.svg", href: "http://bit.ly/3F2nyOX", alt: "Discord" },
    { src: "assets/press-releases/icons/github.svg", href: "https://github.com/web-infra-dev/rspack", alt: "Github" },
    { src: "assets/press-releases/icons/rspack.svg", href: "https://www.rspack.dev/", alt: "Rspack" },
    { src: "assets/press-releases/icons/nx.svg", href: "https://nx.dev/packages/rspack", alt: "NX" },
    { src: "assets/press-releases/icons/twitter.svg", href: "https://twitter.com/rspack_dev", alt: "Twitter" }
  ];

  public readonly postedByPersons = [
    {
      name: "Zackary Chapple",
      title: "Chief Revenue Officer at Valor Software",
      src: "assets/press-releases/person/zackary-chapple.png",
    },
  ];

  public readonly contibutorsPersons = [
    {
      name: "Kaelig Deloumeau-Prigent",
      title: "Principal software engineer at Netlify",
      src: "assets/press-releases/person/kaelig-deloumeau-prigent.png",
    },
    {
      name: "Juri Strumpflohner",
      title: "Senior Director of Developer Experience at Nx",
      src: "assets/press-releases/person/juri-strumpflohner.png",
    },
    {
      name: "Lei Zhang",
      title: "Manager of the platform team at ByteDance",
      src: "assets/press-releases/person/lei-zhang.png"
    },
  ];

  public readonly companies = [
    {
      name: 'ByteDance',
      src: 'assets/press-releases/companies/bytedance.png',
      href: 'https://www.bytedance.com/',
    },
    {
      name: 'Nx',
      src: 'assets/press-releases/companies/nx.png',
      href: 'https://nx.dev/',
    },
    {
      name: 'Netlify',
      src: 'assets/press-releases/companies/netlify.png',
      href: 'https://www.netlify.com/',
    },
    {
      name: 'Valor <wbr>Software',
      src: 'assets/press-releases/companies/valor-software.png',
      href: 'https://valor-software.com/'
    }
  ];
}
