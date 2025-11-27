import os
from datetime import datetime
from pathlib import Path

try:
    from reportlab.lib.pagesizes import letter, A4
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib.units import inch
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
    from reportlab.lib import colors
    from reportlab.lib.enums import TA_CENTER, TA_LEFT
except ImportError:
    print("Installing required packages...")
    os.system("pip install reportlab")
    from reportlab.lib.pagesizes import letter, A4
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib.units import inch
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
    from reportlab.lib import colors
    from reportlab.lib.enums import TA_CENTER, TA_LEFT

def get_all_js_files():
    """Get all JavaScript learning files with their metadata"""
    base_path = Path(r"c:\Chat GPT Road Map")
    
    folders_to_scan = [
        "01 JS",
        "01 Variables and Data types",
        "02 JS",
        "03 JS",
        "04 JS",
        "05 JS",
        "06 Calcutor",
        "07 JS",
        "08 JS Array",
        "09 JS DOM"
    ]
    
    files_data = []
    
    for folder in folders_to_scan:
        folder_path = base_path / folder
        if folder_path.exists():
            for file in folder_path.rglob("*"):
                if file.is_file() and file.suffix in ['.js', '.html', '.py']:
                    # Skip node_modules
                    if 'node_modules' in str(file):
                        continue
                    
                    files_data.append({
                        'folder': folder,
                        'filename': file.name,
                        'path': str(file.relative_to(base_path)),
                        'created': datetime.fromtimestamp(file.stat().st_ctime),
                        'modified': datetime.fromtimestamp(file.stat().st_mtime),
                        'size': file.stat().st_size
                    })
    
    # Sort by creation date
    files_data.sort(key=lambda x: x['created'])
    return files_data

def create_pdf():
    """Create PDF document with file timeline"""
    pdf_filename = "JavaScript_Learning_Timeline.pdf"
    doc = SimpleDocTemplate(pdf_filename, pagesize=A4,
                           rightMargin=30, leftMargin=30,
                           topMargin=30, bottomMargin=18)
    
    # Container for the 'Flowable' objects
    elements = []
    
    # Define styles
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#1a1a1a'),
        spaceAfter=30,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=colors.HexColor('#2c3e50'),
        spaceAfter=12,
        spaceBefore=12,
        fontName='Helvetica-Bold'
    )
    
    # Add title
    title = Paragraph("JavaScript Learning Journey Timeline", title_style)
    elements.append(title)
    elements.append(Spacer(1, 12))
    
    # Add subtitle
    subtitle = Paragraph(f"Generated on: {datetime.now().strftime('%B %d, %Y')}", styles['Normal'])
    elements.append(subtitle)
    elements.append(Spacer(1, 20))
    
    # Get all files
    files_data = get_all_js_files()
    
    # Add summary
    summary_text = f"Total Files: {len(files_data)}"
    summary = Paragraph(summary_text, styles['Normal'])
    elements.append(summary)
    elements.append(Spacer(1, 20))
    
    # Group files by folder
    current_folder = None
    
    for file_data in files_data:
        if current_folder != file_data['folder']:
            if current_folder is not None:
                elements.append(Spacer(1, 20))
            
            current_folder = file_data['folder']
            folder_heading = Paragraph(f"📁 {current_folder}", heading_style)
            elements.append(folder_heading)
            elements.append(Spacer(1, 10))
        
        # Create file entry
        file_info = f"""
        <b>File:</b> {file_data['filename']}<br/>
        <b>Created:</b> {file_data['created'].strftime('%Y-%m-%d %H:%M:%S')}<br/>
        <b>Modified:</b> {file_data['modified'].strftime('%Y-%m-%d %H:%M:%S')}<br/>
        <b>Size:</b> {file_data['size']:,} bytes<br/>
        <b>Path:</b> <i>{file_data['path']}</i>
        """
        
        file_paragraph = Paragraph(file_info, styles['Normal'])
        elements.append(file_paragraph)
        elements.append(Spacer(1, 15))
    
    # Add summary table at the end
    elements.append(PageBreak())
    elements.append(Paragraph("Summary by Folder", title_style))
    elements.append(Spacer(1, 20))
    
    # Count files per folder
    folder_counts = {}
    for file_data in files_data:
        folder = file_data['folder']
        folder_counts[folder] = folder_counts.get(folder, 0) + 1
    
    # Create summary table
    table_data = [['Folder', 'File Count', 'Topics Covered']]
    
    folder_topics = {
        "01 JS": "Basic JavaScript, Scripts",
        "01 Variables and Data types": "Variables, Data Types",
        "02 JS": "Data Types Practice",
        "03 JS": "Operators",
        "04 JS": "Loops",
        "05 JS": "Functions",
        "06 Calcutor": "Calculator Project",
        "07 JS": "Strings",
        "08 JS Array": "Arrays, Array Methods",
        "09 JS DOM": "DOM Manipulation"
    }
    
    for folder in sorted(folder_counts.keys()):
        table_data.append([
            folder,
            str(folder_counts[folder]),
            folder_topics.get(folder, "Various Topics")
        ])
    
    table = Table(table_data, colWidths=[2.5*inch, 1*inch, 3*inch])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#3498db')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 12),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 10),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#f0f0f0')])
    ]))
    
    elements.append(table)
    
    # Build PDF
    doc.build(elements)
    print(f"\n✅ PDF created successfully: {pdf_filename}")
    print(f"📄 Total files documented: {len(files_data)}")
    print(f"📊 Total folders: {len(folder_counts)}")

if __name__ == "__main__":
    try:
        create_pdf()
    except Exception as e:
        print(f"❌ Error creating PDF: {str(e)}")
        import traceback
        traceback.print_exc()
