/**
 * 仪表盘
 */

declare namespace DashboardAPI {
  /**
   * 获取仪表盘数据
   */
  type Announcement = {
    //id => announcement
    id: string;
    //title => announcement
    title: string;
    content: string;
    show: number;
    img_url: string;
    tags: string[];
    created_at: number;
    updated_at: number;
  };
}
