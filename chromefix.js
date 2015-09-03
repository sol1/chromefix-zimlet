/*
 * ***** BEGIN LICENSE BLOCK *****
 * Copyright (c) 2015, Andrew Foster <andy@sol1.com.au>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ***** END LICENSE BLOCK *****
 */

function com_sol1_chromefix_Handler() {
};

com_sol1_chromefix_Handler.prototype = new ZmZimletBase();
com_sol1_chromefix_Handler.prototype.constructor = com_sol1_chromefix_Handler;

com_sol1_chromefix_Handler.prototype.init = function() {
	document.getElementById('skin_td_main').style.width = "100%";
	document.getElementById('skin_td_tree').style.width = "15%";
}

com_sol1_chromefix_Handler.prototype.onMsgView = function(msg, oldMsg) {
	document.getElementById('skin_td_main').style.width = "100%";
	document.getElementById('skin_td_tree').style.width = "15%";
}
