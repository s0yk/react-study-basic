import styled from '@emotion/styled';

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