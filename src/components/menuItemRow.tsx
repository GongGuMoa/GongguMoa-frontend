import styled from "styled-components";

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 8px solid #f2f2f2;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  margin-left: 12px;
  font-size: 16px;
  font-weight: 600;
  flex-grow: 1;
`;

export const Arrow = styled.span`
  font-size: 18px;
  color: #aaa;
`;

export const SectionTitle = styled.div`
  padding: 16px 12px 8px;
  font-weight: bold;
  font-size: 14px;
  color: #888;
`;

export const MenuList = styled.div`
  border-top: 1px solid #eee;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ddd;
  border-radius: 6px;
  margin-right: 12px;
`;

export const MenuText = styled.div`
  flex-grow: 1;
  font-size: 15px;
`;

export const ArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  color: black;
`;
