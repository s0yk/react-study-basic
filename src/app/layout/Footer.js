'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo/logo.png';
import { 
    FooterWrap, FootInner,
        Sitemap, SitemapList, SitemapInnerList,
        FooterContent, FootLink, FootInfo, Copy, SnsList,
} from './styles';

export default function Footer() {
    return (
        <FooterWrap>
            <FootInner>
                <Sitemap>
                    <SitemapList>
                        <p>site map A</p>
                        <SitemapInnerList>
                            <li><Link href="#">site map A-1</Link></li>
                            <li><Link href="#">site map A-2</Link></li>
                            <li><Link href="#">site map A-3</Link></li>
                            <li><Link href="#">site map A-4</Link></li>
                        </SitemapInnerList>
                    </SitemapList>
                    <SitemapList>
                        <p>site map B</p>
                        <SitemapInnerList>
                            <li><Link href="#">site map B-1</Link></li>
                            <li><Link href="#">site map B-2</Link></li>
                            <li><Link href="#">site map B-3</Link></li>
                            <li><Link href="#">site map B-4</Link></li>
                        </SitemapInnerList>
                    </SitemapList>
                    <SitemapList>
                        <p>site map C</p>
                        <SitemapInnerList>
                            <li><Link href="#">site map C-1</Link></li>
                            <li><Link href="#">site map C-2</Link></li>
                            <li><Link href="#">site map C-3</Link></li>
                            <li><Link href="#">site map C-4</Link></li>
                        </SitemapInnerList>
                    </SitemapList>
                    <SitemapList>
                        <p>site map D</p>
                        <SitemapInnerList>
                            <li><Link href="#">site map D-1</Link></li>
                            <li><Link href="#">site map D-2</Link></li>
                            <li><Link href="#">site map D-3</Link></li>
                            <li><Link href="#">site map D-4</Link></li>
                        </SitemapInnerList>
                    </SitemapList>
                    <SitemapList>
                        <p>site map E</p>
                        <SitemapInnerList>
                            <li><Link href="#">site map E-1</Link></li>
                            <li><Link href="#">site map E-2</Link></li>
                            <li><Link href="#">site map E-3</Link></li>
                            <li><Link href="#">site map E-4</Link></li>
                        </SitemapInnerList>
                    </SitemapList>
                </Sitemap>
                <FooterContent>
                    <FootInfo>
                        <FootLink>
                            <li><Link href="#"><Image src={logo} alt="로고" width={150} /></Link></li>
                            <li><Link href="#">개인정보처리방침</Link></li>
                            <li><Link href="#">이용약관</Link></li>
                            <li><Link href="#">채용정보</Link></li>
                        </FootLink>
                        <address>(26464) 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단</address>
                        <Copy>@ 2025 ITPUB Service. All rights reserved.</Copy>
                    </FootInfo>
                    <SnsList>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Youtube</Link></li>
                        <li><Link href="#">Twitter</Link></li>
                        <li><Link href="#">Instagram</Link></li>
                    </SnsList>
                </FooterContent>
            </FootInner>
        </FooterWrap>
    )
}
