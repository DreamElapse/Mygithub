<?php
/**
 * 签到日志模型
 * User: 9006758
 * Date: 2017/3/10
 * Time: 16:54
 */

namespace Cpanel\Model;
use Common\Model\CpanelModel;
use Common\Extend\PhxCrypt;
class SignLogModel extends CpanelModel{

    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
        $config = C('db_config.1');
        $this->connection = array_merge($config['CONFIG'], array('DB_TYPE' => C('DB_TYPE')));
        $this->tablePrefix = $this->connection['DB_PREFIX'];
        $this->tableName = 'user_signin_log';
    }

    public function filter($params){
        $keyword = !empty($params['keyword']) ? trim($params['keyword']) : '';
        $start_time = !empty($params['start_time']) ? strtotime(trim($params['start_time'])) : 0;
        $end_time = !empty($params['end_time']) ? strtotime(trim($params['end_time'])) : 0;
        $field = 'sign.id,sign.bind_id,sign.points,sign.days,sign.add_time,';
        $field .= 'bu.mobile,bu.nickname';
        $this->alias('sign')->join("left join __BIND_USER__ as bu on bu.bind_id=sign.bind_id")->field($field);
        if($keyword){
            $phx_keyword = PhxCrypt::phxEncrypt($keyword);
            $where['_string'] = "bu.mobile like '%$phx_keyword%' or bu.nickname like '%$keyword%'";
        }
        if($start_time && $end_time){
            $where['sign.add_time'] = array('between', array($start_time, $end_time));
        }
        if(!empty($where)){
            $this->where($where);
        }
        $this->order('id DESC');

        return $this;
    }

    public function format($data){
        if(!empty($data['rows'])){
            foreach($data['rows'] as &$val){
                $val['mobile'] = PhxCrypt::phxDecrypt($val['mobile']);
            }
        }
        return $data;
    }

}