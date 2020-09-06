<?php

class restuarantdata {
    
    private $menulist;

    function __construct(array $menulist) {
        if (sizeof($menulist)>0) {
            $this->menulist = $menulist;
        } else {
            throw new Exception("No Student record available");
        }
    }

    public function getMenuItemlist() {
        $menuItemList = [];

        foreach($this->menulist as $menuitem) {
            $menuItemList[] = array(
                "id"=>$menuitem['id'],
                "shortname"=>$menuitem['short_name'],
                "name"=> $menuitem['name'],
                "description" => $menuitem['description'],
            );
        }
        return json_encode($menuItemList);
    }

    public function getMenuItemDetails($itemid) {
        $response = ["Item not available"];
        if($itemid) {
            foreach($this->menulist as $menuitem) {
                if ($itemid == $menuitem['id']) {
                    $response = $menuitem;
                    break;
                }
            }
        }
        return json_encode($response);
    }

    

}
?>