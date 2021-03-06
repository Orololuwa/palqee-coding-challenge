import styled from "styled-components";

const PaginationCtx = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 2.5rem 0;
  flex-wrap: wrap;
  gap: 0.5rem;

  .pagination-item {
    height: 32px;
    width: 32px;
    text-align: center;
    margin: auto 4px;
    background: ${({ theme }) => theme.colors.gray}66;
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
    text-align: center;
    border: 0.5px solid transparent;
    transition: all 0.4s;

    &.dots:hover {
      cursor: default;
      border: 0.5px solid ${({ theme }) => theme.colors.black};
    }
    &:hover {
      cursor: pointer;
      border: 0.5px solid ${({ theme }) => theme.colors.black};
    }

    &.selected {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    }

    .arrow {
      &::before {
        position: relative;
        /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
        content: "";
        /* By using an em scale, the arrows will size with the font */
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid ${({ theme }) => theme.colors.black};
        border-top: 0.12em solid ${({ theme }) => theme.colors.black};
      }

      &.left {
        transform: rotate(-135deg) translate(-50%);
      }

      &.right {
        transform: rotate(45deg);
      }
    }

    &.disabled {
      pointer-events: none;

      .arrow::before {
        border-right: 0.12em solid ${({ theme }) => theme.colors.black};
        border-top: 0.12em solid ${({ theme }) => theme.colors.black};
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: auto 1px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-wrap: wrap;
    gap: 0.4rem;
  }
`;

export default PaginationCtx;
