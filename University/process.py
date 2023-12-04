import pandas as pd

# 读取 CSV 文件
data = pd.read_csv('cwurData.csv')

# 选择需要的列：'country' 和 'year'
data = data[['country', 'year']]

# 使用 pivot_table 将数据按照年份进行透视
pivot_data = data.pivot_table(index='country', columns='year', aggfunc=len, fill_value=0)

# 将透视后的数据保存到新的 CSV 文件
pivot_data.to_csv('country_year_counts.csv')
