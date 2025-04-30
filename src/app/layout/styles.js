import styled from '@emotion/styled';

// Header
export const HeaderWrap = styled.header`
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #ddd;
`
export const HeaderInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
`
export const HeaderUtil = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
    justify-content: flex-end;
    li a {
        font-size: 1.4rem;
        color: #666;
    }
`
export const HeaderMainConts = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    gap: 24px;
    align-items: center;
`
export const Gnb = styled.nav`
    
`
export const GnbMainList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 12px;
`
export const GnbMainBtn = styled.li`

`
export const GnbSubList = styled.ul`
    display: none;
`
export const GnbSubBtn = styled.li`

`


// Footer
export const FooterWrap = styled.footer`
    background-color: #35353d;
    color: #f0f0f0;
`
export const FootInner = styled.footer`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    margin: 0 auto;
`
export const Sitemap = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 48px 0;
    border-bottom: 1px solid #46464b;
`
export const SitemapList = styled.li`
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
        font-weight: 500;
    }
`
export const SitemapInnerList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
    li a {
        color: #aaa;
    }

`
export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 48px 0;
`
export const FootInfo = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const FootLink = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    li::after {
        content: "|";
        display: inline-block;
        margin: 0 8px;
        color: #8d8d95;
    }
    li:first-of-type::after,
    li:last-of-type::after {
        content: "";
    }
`
export const Copy = styled.p`

`
export const SnsList = styled.ul`

`