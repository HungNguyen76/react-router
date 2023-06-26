### React Router Dom
1. Tổng quan react router
    - hỗ trợ cơ chế routing chuyển trang trong reactjs
    - đồng bộ url trên trình duyệt với ứng dụng của bạn
    - giúp render component tương ứng qua path
2. Configure Routes
    - BrowserRouter
    - Routes, Route (path, element)
3. Nested Route
    - định tuyến lồng nhau, thường dùng với Tabs Component, hoặc 1 trang có chưa các trang con
    - Outlet xác định vị trí hiển thị component con khi route trùng khớp
4. Link và NavLink
   - Trong HTML sử dụng thẻ <a> để chuyển trang
   - Reactjs sử dụng thẻ <Link> để chuyển trang
   - <NavLink> sử dụng để activeName và activeStyle
5. Navigate 
   - useNavigate
        1. useNavigate với 1 tham số
        2. useNavigate với history
        3. useNavigate với thuộc tính replace = true
   -Component Navigate: sử dụng để chuyển trang khi return ở function component
6. Dynamic Routes
   - Giải quyết định tuyến động, routes theo 1 cấu trúc được định nghĩa sẵn
   - Sử dụng useParams dể lấy tham số trên URL

7.Lazy Loading (interview)
    -Kĩ thuật tối ưu hoá ứng dụng: chỉ load những component cần thiết, giúp ứng dụng mượt mà, nhanh chóng, tăng trải nghiệm


### REDUX
    1. Tổng quan Redux
        - Thư viện Javascript
        - Công cụ để để quản lý và cập nhật trạng thái của ứng dụng
        - Thường dùng kết hợp với react
    2. Redux sẽ hoạt động dựa trên 4 thành phần cơ bản: Actions, Reducers, Store và View
        -Actions: events được người dùng sử dụng để gửi dữ liệu: api calls, form submission, tương tác của user với app
        -Actions: type actions, payload chứa thông tin