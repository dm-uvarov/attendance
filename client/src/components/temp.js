// {/* <Routes>
// <Route exact path="/" element ={<Login  setUser={setUser}/>} />

// {/* <Route path="/signup" element ={<Signup />} /> */}

// {/* <Route path="/logout" element ={<Logout setUser={setUser} />} /> */}

// <Route path="/classes" element ={<DisciplinesListPage />} />
// {/*slot page for chosen discipline     */}
// <Route path="/:id/slots" element ={<SlotPage />} />
// {/*slot page for all disciplines    */}
// <Route path="/slots" element ={<SlotPage />} />


// {/*attendace page for chosen discipline     */}
// <Route path="/:id/slots/:id" element ={<SlotPage />} />
// {/*attendance page for all disciplines    */}
// <Route path="/slots/:id" element ={<AttendancePage />} />


// </Routes> */}

// <Form
// className="login-form"
// size="medium"
// >
//    <h3>Please Login</h3> 
// <Form.Item
//   name="username"
//   rules={[
//     {
//       required: true,
//       message: "Please input your Username!",
//     },
//   ]}
//   value={username}
//   onChange={(e) => setUsername(e.target.value)}
// >
//   <Input
//     prefix={<UserOutlined className="site-form-item-icon" />}
//     placeholder="Username"
//   />
// </Form.Item>
// <Form.Item
//   name="password"
//   rules={[
//     {
//       required: true,
//       message: "Please input your Password!",
//     },
//   ]}
//   value={password}
//   onChange={(e) => setPassword(e.target.value)}
// >
//   <Input
//     prefix={<LockOutlined className="site-form-item-icon" />}
//     type="password"
//     placeholder="Password"
//   />
// </Form.Item>
// <Form.Item>
//   <Form.Item
//     style={{
//       textAlign: "left",
//     }}
//     name="remember"
//     valuePropName="checked"
//     noStyle
//   >
//     {/* <Checkbox>Remember me</Checkbox> */}
//   </Form.Item>

//   {/* <a className="login-form-forgot" href="">
//     Forgot password
//   </a> */}
// </Form.Item>

// <Form.Item
//   style={{
//     textAlign: "center",
//   }}
// >
//   <Button
//     type="primary"
//     htmlType="submit"
//     className="login-form-button"
//     shape="square"
//     style={{
//       margin: "auto",
//     }}
//     onClick={onSubmit}
//   >
//     Log in
//   </Button>
//   {/* Or <a href="">register now!</a> */}
// </Form.Item>
// </Form>