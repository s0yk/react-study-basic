'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo/logo.png';
import { 
    HeaderWrap, HeaderInner,
        HeaderUtil,
        HeaderMainConts,
            Gnb, GnbMainList, GnbMainBtn, GnbSubList, GnbSubBtn
} from './styles';

export default function Header() {
    return (
        <HeaderWrap>
            <HeaderInner>
                <HeaderUtil>
                    <li><Link href="#">통합예약</Link></li>
                    <li><Link href="#">로그인</Link></li>
                    <li><Link href="#">마이페이지</Link></li>
                </HeaderUtil>

                <HeaderMainConts>
                    <h1 className="logo"><Link href="#"><Image src={logo} alt="로고" width={200} /></Link></h1>
                    <Gnb>
                        <GnbMainList>
                            <GnbMainBtn>
                                <Link href="#">1Depth A</Link>
                                <GnbSubList>
                                    <GnbSubBtn>
                                        <Link href="#">2Depth A</Link>
                                        <Link href="#">2Depth B</Link>
                                        <Link href="#">2Depth C</Link>
                                    </GnbSubBtn>
                                </GnbSubList>
                            </GnbMainBtn>
                            <GnbMainBtn>
                                <Link href="#" className='is-active'>1Depth B</Link>
                            </GnbMainBtn>
                            <GnbMainBtn>
                                <Link href="#">1Depth C</Link>
                                </GnbMainBtn>
                            <GnbMainBtn>
                                <Link href="#">1Depth D</Link>
                                </GnbMainBtn>
                        </GnbMainList>
                    </Gnb>
                </HeaderMainConts>
            </HeaderInner>
        </HeaderWrap>
    );
}