# ws-im-react-native

# `Component`
### `MessageListView`
Prop | Description | Type | Default
------ | ------ | ------ | ------
`navigation` | 导航器 | `object` | `require`
`listViewHeader` | header | `element` | null

```jsx
  render(){
    return (
       <MessageListView
         navigation={navigation}
         listViewHeader={header}
       />
    )
  }
```

### `MessageDetail`
只适用于`react-navigation`，并且要求必须要设置`routerName`为`MessageDetail`
```jsx
  import { StackNavigator } from "react-navigation";

  StackNavigator(
    {
      MessageDetail: {
        screen: MessageDetail,
      },
    }
  )
```


## `Method`

* ##### `initializeSDKWithOptions` \(_params_\):  初始化sdk，并登陆

Params | Description | Type | Default
------ | ------ | ------ | ------
`access_token` | im登陆的access_token | `string` | `require`
`getNavigation` | 获得导航器 | `func` | `require`
`getNavigation` | 获得导航器 | `func` | `require`
`getStore` | 获得外部store | `func` | `require`
`unreadMessageNumberChange` | 未读消息发生改变时 | `func` | `require`

```javascript
    initializeSDKWithOptions({
        access_token: imData.data.access_token,
        getNavigation: ()=>{
            return store.getState().navigation
        },
        getStore: ()=>{
            return store
        },
        unreadMessageNumberChange: (e)=>{
            let number = 0
            Object.keys(e).forEach(key => {
                number+=e[key]
            })
            const {
                unreadMessageNumber
            } = store.getState().app.user
            if(unreadMessageNumber!==number){
                dispatch(setUnreadMessageNumber(number))
            }
        },
    })
```

* ##### `openMessageDetailViewController` \(_{ id }_\): 通过im_user_id打开消息对话界面
```jsx
    import {openMessageDetailViewController} form 'ws-im-react-native'
    
    render(){
      return (
        <Button
          title={'开始对话'}
          onPress={()=>{
            openMessageDetailViewController({
              id: im_user_id,
            })
          }}
        >
      )
    }
```

* ##### `setStickTopSessionList` \(_[ id ]_\): `id` = `im_user_id` 设置置顶联系人(可以用作客服)
```jsx
    import {setStickTopSessionList} form 'ws-im-react-native'
    
    render(){
      return (
        <Button
          title={'设置置顶'}
          onPress={()=>{
            setStickTopSessionList([ 1 ])
          }}
        >
      )
    }
```

* ##### `logOut` : 退出登录, return `Promise`
```jsx
    import {logOut} form 'ws-im-react-native'
    
    render(){
      return (
        <Button
          title={'退出登录'}
          onPress={()=>{
            logOut()
            .then((e)=>{
              
            })
          }}
        >
      )
    }
```
