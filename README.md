chromefix-zimlet
===================

Google Chrome v45 suffers from layout problems inside the Zimbra 8.0.x web interface. This attempts to temporarily correct them until an official patch is released and as a zimlet doesn't require a disruptive mailboxd restart.

Official Zimbra 8.6 patches have now been released to address the issue.

For more information, see https://bugzilla.zimbra.com/show_bug.cgi?id=101084 and https://wiki.zimbra.com/wiki/Zimbra_Web_Client_in_ZCS_8.0.x_and_Google_Chrome_45%2B

### Deploy

zimbra@server:~$ `zmzimletctl deploy path/to/com_sol1_chromefix.zip`

This installs and makes available in your default Class of Service (COS). You may need to assign its availability to other classes if you have them.

Remember to undeploy this zimlet once an official patch is applied!

### Known issues

 * When Zimbra first loads you need to either click on another tab besides Mail then back again, or alternatively resize your browser window once.
