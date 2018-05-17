1.设置软件任何来源
```bash
sudo spctl --master-disable
```

2.设置ntfs格式移动磁盘可写

- 确定磁盘名称
- 编辑/etc/fstab文件
- 添加
```
LABEL=name ntfs rw,auto,nobrowse
```
- 在/Volumes目录下查看

Tips: 如果mac拷贝文件占用`xattr -c *.*`