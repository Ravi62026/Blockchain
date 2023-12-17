// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract a{
    function dosomething() external {
        // revert();
    }
}


contract b{
    a ac = new a();
    string public status = "not available";

    function go() public {
        try ac.dosomething(){
            status = "sucess";
        }
        catch {
            status = "failed";
        }
    }
}