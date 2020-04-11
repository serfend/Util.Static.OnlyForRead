console.show()
var resultList = {}
while (true) {
  main()
}
function main() {
  var page = id('com.tencent.mobileqq:id/kzn').findOne()
  var list = handlePage(page)
  for (var j = 0; j < list.length; j++) {
    list[j].result = list[j].resultDescription.replace(/[^0-9]/ig, "")
    list[j].response = 0
    if (!resultList[list[j].username + '#' + list[j].timestamp]) {
      resultList[list[j].username + '#' + list[j].timestamp] = list[j]

      console.log(list[j].username + '于' + list[j].timestamp + '赞' + list[j].result + '次')
    }
  }
  for (var co = 0; co < 20; co++) {
    for (var j = 0; j < list.length; j++) {
      if (list[j].response < 20) {
        list[j].item.click()
        list[j].response++
        sleep(100)
      }
    }
  }

  var nomore = id('com.tencent.mobileqq:id/f0v').findOne(500)
  if (nomore != null) {
    nomore.parent().click()
    sleep(1000)
  }
}
function handlePage(menu) {
  var menuItems = menu.children()
  var resultItems = []
  for (var i = 0; i < menuItems.length; i++) {
    var useritem = menuItems[i]
    if (useritem == null) {
      console.log('userItem is null:' + i)
    }
    if (useritem.className().indexOf('Linear') > 0) {
      var userItemInfo3 = useritem.children()[0]
      if (!userItemInfo3) continue
      var userItemInfo2 = userItemInfo3.children()[1]
      if (!userItemInfo2) continue
      var userItemInfo = userItemInfo2.children()
      if (!userItemInfo) continue
      var data_username = userItemInfo[0].children()[0].children()[0].text()
      var data_timestamp = userItemInfo[1].text()
      var data_age = userItemInfo[2].text()
      var data_skyType = userItemInfo[3].text()
      var data_resultDescription = userItemInfo[4].text()
      var resultItem = userItemInfo[5]
      var userInfo = {
        username: data_username,
        age: data_age,
        timestamp: data_timestamp,
        skyType: data_skyType,
        resultDescription: data_resultDescription,
        item: resultItem
      }
      if (resultItem) resultItems.push(userInfo)
    }
  }
  return resultItems
}