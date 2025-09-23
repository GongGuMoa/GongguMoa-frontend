import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/user";
import { LogoNav } from "../components/nav";
import { Container, Box } from "../styles/common";
import {
  ProfileBox,
  ProfileImg,
  ArrowIcon,
  UserName,
  Arrow,
  SectionTitle,
  MenuList,
  MenuItem,
  MenuIcon,
  MenuText,
} from "../components/menuItemRow";
import api from "../api/axios";

const Mypage = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      navigate("/login");
    } catch (err) {
      console.error("로그아웃 실패", err);
    }
  };

  const handleWithdraw = async () => {
    try {
      await api.delete("/users/withdraw");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      navigate("/goodbye");
    } catch (err) {
      console.error("탈퇴 실패", err);
    }
  };

  return (
    <>
      <LogoNav />
      <Container>
        <Box>
          <ProfileBox onClick={() => navigate("/mypage/profile")}>
            <ProfileImg src={user.profileImage || "/default-profile.png"} />
            <UserName>{user.name || "이름없음"}</UserName>
            <ArrowIcon />
          </ProfileBox>

          <SectionTitle>나의 활동</SectionTitle>
          <MenuList>
            <MenuItem onClick={() => navigate("/mypage/posts")}>
              <MenuIcon />
              <MenuText>작성글 보기</MenuText>
              <ArrowIcon />
            </MenuItem>
          </MenuList>

          <SectionTitle>설정</SectionTitle>
          <MenuList>
            <MenuItem onClick={handleLogout}>
              <MenuIcon />
              <MenuText>로그아웃</MenuText>
            </MenuItem>
            <MenuItem onClick={handleWithdraw}>
              <MenuIcon />
              <MenuText>탈퇴하기</MenuText>
            </MenuItem>
          </MenuList>
        </Box>
      </Container>
    </>
  );
};

export default Mypage;
